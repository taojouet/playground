import CustomCursor from '../components/Cursor'


export default function Home() {
  return (
    <div>
      <main>
        <CustomCursor />
        <div className="relative h-32">
          <p className="text-center text-2xl text-bold">Welcome to my playground!</p>
        </div>
      </main>
    </div>
  )
}
