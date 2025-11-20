const btn = document.getElementById("generateBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const city = document.getElementById("city").value.trim();
  const budget = document.getElementById("budget").value.trim();
  const days = document.getElementById("days").value.trim();
  const interests = document.getElementById("interests").value.trim();

  if (!city || !budget || !days || !interests) {
    alert("Please fill in all fields!");
    return;
  }

  output.classList.remove("hidden");
  output.innerHTML = "✈️ Planning your trip...";

  const prompt = `
You are a smart AI travel planner for students.
The user is currently in ${city}.
Suggest travel destinations they can visit from ${city} within a budget of ₹${budget} for ${days} days.
Include their interests: ${interests}.

Requirements:
1. Pick destinations outside the starting city, reachable by bus, train, or even flight travel according to their budget.
2. Provide a day-wise itinerary (2-3 points per day).
3. Suggest food options.
4. Suggest budget accommodation or rooms within the budget.
5. Include approximate daily and total cost breakdown.
6. Keep it short, simple, and student-friendly.
7. Use bullet points and easy-to-read format.
8. Make everything according to their budget like if high then luxury, mid means mid kind off.
9. Mention that this plan is for single person only at the end.
`;

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    console.log("Response:", data);

    if (data.error) {
      output.innerHTML = `⚠️ API Error: ${data.error}`;
      return;
    }

    output.innerHTML =
      "🌍 <b>Your Trip Plan:</b><br><br>" +
      data.text.replace(/\n/g, "<br>");
  } catch (err) {
    console.error("Fetch error:", err);
    output.innerHTML = "⚠️ Network or Server Error.";
  }
});
