export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form>
        <input type="text" name="title"></input>
      </form>
    </>
  );
}
