export function makeReviews(n: any) {
  const base = [
    "Excellent punctual service. — Amit Sharma",
    "Team was professional and thorough. — Priya Deshmukh",
    "Sofa looks brand new. — Rahul Patil",
    "Good value for money. — Sneha Kulkarni",
    "Kitchen cleaning was done perfectly. — Kunal Mehra",
    "Bathrooms are shining like new. — Neha Kapoor",
    "Very polite and hardworking team. — Arjun Nair",
    "Staff arrived on time and worked fast. — Meera Iyer",
    "Friendly staff and hassle-free experience. — Nikhil Patil",
    "Will recommend to friends and family. — Manish Verma",
  ];
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(`${base[i % base.length]}`);
  return arr;
}
