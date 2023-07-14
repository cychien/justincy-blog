type HeaderProps = {
  title: string;
  tags: string;
  publishedAt: string;
};

function Header({ title, tags, publishedAt }: HeaderProps) {
  return (
    <div>
      <div>
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
}

export { Header };
