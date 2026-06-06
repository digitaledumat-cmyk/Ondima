import { compareRows } from "@/lib/pricing";

export default function PricingCompare() {
  return (
    <div className="mt-16 overflow-x-auto">
      <p className="mb-6 text-center text-sm font-medium tracking-widest text-zinc-500 uppercase">
        Comparatif des forfaits
      </p>
      <div className="glow-border min-w-[640px] overflow-hidden rounded-2xl glass-panel">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03]">
              <th className="px-5 py-4 text-left font-medium text-zinc-400">
                Caractéristique
              </th>
              <th className="px-5 py-4 text-center font-semibold text-violet-400">
                Essentiel
              </th>
              <th className="px-5 py-4 text-center font-semibold text-cyan-400">
                Ultra
              </th>
              <th className="px-5 py-4 text-center font-semibold text-white">
                <span className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-2.5 py-0.5 text-xs">
                  VIP ★
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row, i) => (
              <tr
                key={row.label}
                className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${
                  i % 2 === 0 ? "" : "bg-white/[0.01]"
                }`}
              >
                <td className="px-5 py-3.5 font-medium text-zinc-300">
                  {row.label}
                </td>
                <td className="px-5 py-3.5 text-center text-zinc-400">
                  {row.essentiel}
                </td>
                <td className="px-5 py-3.5 text-center text-zinc-400">
                  {row.ultra}
                </td>
                <td className="px-5 py-3.5 text-center font-medium text-white">
                  {row.vip}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
