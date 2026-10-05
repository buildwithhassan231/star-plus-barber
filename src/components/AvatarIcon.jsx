const AvatarIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Background circle */}
    <circle cx="32" cy="32" r="32" fill="#2a2a2e" />

    {/* Head */}
    <circle cx="32" cy="24" r="11" fill="#c9a24d" opacity="0.85" />

    {/* Body / shoulders */}
    <ellipse cx="32" cy="54" rx="18" ry="13" fill="#c9a24d" opacity="0.85" />
  </svg>
)

export default AvatarIcon
