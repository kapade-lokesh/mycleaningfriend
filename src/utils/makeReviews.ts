export function makeReviews(prefix: any, n: any) {
    const base = [
      "Excellent punctual service.",
      "Team was professional and thorough.",
      "Sofa looks brand new.",
      "Good value for money.",
      "Will book again.",
      "Easy booking and friendly staff.",
      "Safe chemicals used.",
      "Verified professionals — felt safe.",
      "Quick response and tidy finishing.",
      "Highly recommended.",
      "Great communication and timing.",
      "Very satisfied with the cleaning.",
      "Thorough and careful work.",
      "Left the house spotless.",
      "Amazing service quality.",
    ];
    const arr = [];
    for (let i = 0; i < n; i++)
      arr.push(`${base[i % base.length]} — ${prefix} User${i + 1}`);
    return arr;
  }