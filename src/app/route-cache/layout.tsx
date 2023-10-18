import DelayServerComponent from "@/components/DelayServerComponent"

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>
            Layout
        </nav>
        <DelayServerComponent second={3} />
        {children}
      </section>
    )
  }