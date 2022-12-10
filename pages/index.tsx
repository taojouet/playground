import CustomCursor from '../components/Cursor'


export default function Home() {
  return (
    <div>
      <main className="min-h-screen p-64 flex-1 flex flex-col justify-center items-center">
        <CustomCursor />
        <div className="">
          <p className="text-center text-2xl text-bold">Welcome to my playground!</p>
        </div>
      </main>
    </div>
  )
}
