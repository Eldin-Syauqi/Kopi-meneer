import { useCallback } from "react";
import { getTeamMembers } from "@/api/team";
import ErrorMessage from "@/components/common/ErrorMessage";
import Loading from "@/components/common/Loading";
import TeamCard from "@/components/team/TeamCard";
import { useAsync } from "@/hooks/useAsync";

export default function TeamGrid({ count = 8 }: { count?: number }) {
  const load = useCallback(() => getTeamMembers(count), [count]);
  const { data, loading, error } = useAsync(load);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
