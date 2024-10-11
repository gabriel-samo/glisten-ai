import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: ContainerProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
