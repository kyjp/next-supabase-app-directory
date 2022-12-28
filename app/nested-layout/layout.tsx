export default function FirstLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="m-6 text-center">
      <p>Layout 1</p>
      {children}
    </main>
  )
}
