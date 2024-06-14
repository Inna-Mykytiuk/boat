interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={`title relative gradient-text font-bold text-[70px]  font-comforta text-center tracking-tighter leading-tight uppercase ${className}`}
    >
      {children}
    </h1>
  );
}
