export default function Loading() {
  return (
    <div role="status" className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-muted-foreground">
      <span
        aria-hidden="true"
        className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary"
      />
      <span>Loading...</span>
    </div>
  );
}
