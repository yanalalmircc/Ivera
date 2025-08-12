export const MasterCard = ({ className }: { className?: string }) => {
  return (
    <svg
      width="42"
      height="30"
      viewBox="0 0 42 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H38C40.2091 0 42 1.79086 42 4V26C42 28.2091 40.2091 30 38 30H4C1.79086 30 0 28.2091 0 26V4Z"
        fill="black"
      />
      <ellipse cx="16" cy="15" rx="7.49996" ry="7.5" fill="#E80B26" />
      <ellipse cx="26" cy="15" rx="7.49996" ry="7.5" fill="#F59D31" />
      <path
        d="M21 20.5902C22.5344 19.2169 23.5 17.2213 23.5 15C23.5 12.7787 22.5344 10.7831 21 9.40979C19.4656 10.7831 18.5 12.7787 18.5 15C18.5 17.2213 19.4656 19.2169 21 20.5902Z"
        fill="#FC6020"
      />
    </svg>
  );
};
