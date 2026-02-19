import { Text } from "./Text";

interface AdvancementTableProps {
  columns: string[];
  rows: Array<{ [key: string]: string }>;
  className?: string;
  showLevel?: boolean;
  title?: string;
}

export function AdvancementTable({
  columns,
  rows,
  className = "",
  showLevel = false,
  title,
}: AdvancementTableProps) {
  return (
    <div className={className}>
      {title && (
        <div className="flex items-center gap-0 px-2 pt-1.5 pb-1">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-500 shrink-0" />
          <span className="text-gray-500 text-[8px] leading-none -mx-px shrink-0">◆</span>
          <h3 className="text-center px-1 text-sm font-bold leading-tight">
            {title}
          </h3>
          <span className="text-gray-500 text-[8px] leading-none -mx-px shrink-0">◆</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-500 to-transparent shrink-0" />
        </div>
      )}
      <table className="w-full border-collapse text-xs leading-tight">
        <thead>
          <tr>
            {showLevel && (
              <th className="px-1 py-0.5 text-center align-middle font-semibold">
                <Text>Level</Text>
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column}
                className="px-1 py-0.5 text-left align-middle min-w-[75px] bg-[#f3f3ee] font-bold"
              >
                <Text>{column}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 1 ? "bg-[#f3f3ee]" : "bg-transparent"}
            >
              {showLevel && (
                <td className="px-1 py-0.5 text-center align-middle">
                  <Text>{row.level}</Text>
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column}
                  className="px-1 py-0.5 align-middle min-w-[75px]"
                >
                  <Text>{row[column] || "—"}</Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {title && (
        <div className="flex items-center gap-1 px-2 pt-1.5 pb-1">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-500" />
          <div className="flex justify-center py-1 text-gray-500 text-[8px] leading-none">
            ◆
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-500 to-transparent" />
        </div>
      )}
    </div>
  );
}
