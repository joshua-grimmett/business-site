
export default function HalfGrid({ children, alt }) {
  return (
    <div className={alt ? 'half-grid-alt' : 'half-grid'}>
      <div className="grid md:grid-cols-2 h-full items-center gap-10">
        { children }
      </div>
    </div>
  )
}
