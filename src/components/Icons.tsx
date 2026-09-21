type IconProps = { size?: number; className?: string; strokeWidth?: number };
const base = (size: number, className: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  className: "icon " + className,
});
export function ArrowIcon({
  size = 18,
  className = "",
  strokeWidth = 1.6,
}: IconProps) {
  return (
    <svg {...base(size, "icon-arrow " + className)} strokeWidth={strokeWidth}>
      <path d="M6 18 18 6" />
      <path d="M8 6h10v10" />
    </svg>
  );
}
export function ArrowRightIcon({
  size = 18,
  className = "",
  strokeWidth = 1.6,
}: IconProps) {
  return (
    <svg
      {...base(size, "icon-arrow-right " + className)}
      strokeWidth={strokeWidth}
    >
      <path d="M4 12h16" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}
export function ArrowLeftIcon({
  size = 18,
  className = "",
  strokeWidth = 1.6,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <path d="M20 12H4" />
      <path d="m11 5-7 7 7 7" />
    </svg>
  );
}
export function ArrowDownIcon({
  size = 18,
  className = "",
  strokeWidth = 1.6,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <path d="M12 4v16" />
      <path d="m5 13 7 7 7-7" />
    </svg>
  );
}
export function PlayIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={1.5}>
      <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function CloseIcon({
  size = 20,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}
export function PlusIcon({
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, "icon-plus " + className)} strokeWidth={strokeWidth}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function CheckIcon({
  size = 18,
  className = "",
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
export function PhoneIcon({
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <path d="M5.5 3h3l1.8 4.4-2.1 1.7a11.5 11.5 0 0 0 6.7 6.7l1.7-2.1L21 15.5v3A2.5 2.5 0 0 1 18.5 21 15.5 15.5 0 0 1 3 5.5 2.5 2.5 0 0 1 5.5 3Z" />
    </svg>
  );
}
export function MailIcon({
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}
export function PinIcon({
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
export function ClockIcon({
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
export function InstagramIcon({
  size = 18,
  className = "",
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg {...base(size, className)} strokeWidth={strokeWidth}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function StarIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg {...base(size, "icon-star " + className)} strokeWidth={1}>
      <path
        d="m12 2.8 2.8 6 6.5.7-4.9 4.4 1.4 6.4L12 17l-5.8 3.3 1.4-6.4-4.9-4.4 6.5-.7 2.8-6Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
export function GoogleMark({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={"icon icon-google " + className}
    >
      <path
        d="M21.6 12.2c0-.7-.1-1.3-.2-1.9H12v3.7h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z"
        fill="#4285F4"
      />
      <path
        d="M12 21.6c2.7 0 4.9-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6a10 10 0 0 0 8.9 5.4Z"
        fill="#34A853"
      />
      <path
        d="M6.4 13.6a6 6 0 0 1 0-3.8V7.2H3.1a10 10 0 0 0 0 9l3.3-2.6Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.4c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.2l3.3 2.6c.8-2.3 3-4 5.6-4Z"
        fill="#EA4335"
      />
    </svg>
  );
}
export function Stars({
  count = 5,
  size = 16,
}: {
  count?: number;
  size?: number;
}) {
  return (
    <span className="stars" aria-label={`${count} étoiles sur 5`} role="img">
      {Array.from({ length: count }, (_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </span>
  );
}
