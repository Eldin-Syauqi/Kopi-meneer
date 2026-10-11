import type { TeamMember } from "@/types";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-2xl border bg-card p-6 text-center">
      <div className="relative mx-auto h-44 w-36">
        <div
          aria-hidden="true"
          className="absolute -right-1.5 -bottom-1.5 h-full w-full rounded-t-[999px] rounded-b-xl border-2 border-[var(--crema)]"
        />
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          width={144}
          height={176}
          loading="lazy"
          className="relative h-full w-full rounded-t-[999px] rounded-b-xl border-4 border-primary object-cover"
        />
      </div>
      <h3 className="mt-6 text-xl">{member.name}</h3>
      <p className="mt-1 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
        {member.role}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
    </article>
  );
}
