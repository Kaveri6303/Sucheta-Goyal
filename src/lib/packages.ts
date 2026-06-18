export type PackageOption = {
  id: string;
  label: string;
  meet: string;
  details: string;
  cost: string;
};

export const PACKAGES: PackageOption[] = [
  {
    id: "3m",
    label: "3 Months Program",
    meet: "11 HC + 36 E",
    details: "11 Health Coaching Sessions and 36 exercise sessions",
    cost: "₹49,999",
  },
  {
    id: "6m",
    label: "6 Months Program",
    meet: "16 HC + 72 E",
    details: "16 Health Coaching Sessions and 72 exercise sessions",
    cost: "₹59,999",
  },
  {
    id: "12m",
    label: "12 Months Program",
    meet: "20 HC + 144 E",
    details: "20 Health Coaching Sessions and 144 exercise sessions",
    cost: "₹1,13,999",
  },
];

export function getPackageById(id: string) {
  return PACKAGES.find((p) => p.id === id);
}
