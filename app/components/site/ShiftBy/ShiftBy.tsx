type ShiftByProps = {
  x?: number;
  y?: number;
  children: React.ReactNode;
};

function ShiftBy({ children, x = 0, y = 0 }: ShiftByProps) {
  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

export { ShiftBy };
