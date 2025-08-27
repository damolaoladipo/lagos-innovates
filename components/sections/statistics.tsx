import { impactData, ImpactItem } from "@/_data/impact"


interface StatisticCardProps {
  statistic: ImpactItem
}
function StatisticCard({ statistic }: StatisticCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-2">
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{statistic.label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
          {statistic.value}
        </span>
        {statistic.suffix && <span className="text-xl font-medium text-orange-400/80">{statistic.suffix}</span>}
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{statistic.description}</div>
    </div>
  )
}

export default function StatisticsSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Heading and description */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">{impactData.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mr-12">{impactData.subheading}</p>
          </div>

          {/* Right column - Statistics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactData.items.map((item) => (
              <StatisticCard key={item.id} statistic={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
