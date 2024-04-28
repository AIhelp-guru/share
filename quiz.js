  var quizData = [
    {
    "question": "What is the vertex of the parabola represented by the equation y = x^2 - 4x + 3?",
    "options": ["a) (-2, -1)", "b) (2, -1)", "c) (-2, 7)", "d) (2, 7)"],
    "answer": "b",
    "explanation": "The vertex of a parabola in the form y = ax^2 + bx + c is at x = -b/2a. In this case, a = 1 and b = -4, so x = -(-4)/(2*1) = 2. Plugging x = 2 into the equation, we get y = 2^2 - 4*2 + 3 = -1. Therefore, the vertex is (2, -1)."
  },
  {
    "question": "What is the equation of the axis of symmetry of the parabola represented by the equation y = -2x^2 + 8x - 5?",
    "options": ["a) x = 2", "b) x = -2", "c) y = 2", "d) y = -2"],
    "answer": "a",
    "explanation": "The axis of symmetry of a parabola in the form y = ax^2 + bx + c is at x = -b/2a. In this case, a = -2 and b = 8, so x = -8/(2*(-2)) = 2. Therefore, the equation of the axis of symmetry is x = 2."
  },
  {
    "question": "What is the range of the function f(x) = x^3 - 3x^2 + 2?",
    "options": ["a) All real numbers", "b) y ≥ 2", "c) y ≤ 2", "d) y > -1"],
    "answer": "a",
    "explanation": "The range of a cubic function is all real numbers. This can be proven using calculus, but for the SAT, you can simply consider that the function can take on any value as x approaches positive or negative infinity."
  },
  {
    "question": "What is the domain of the function g(x) = sqrt(x - 4)?",
    "options": ["a) All real numbers", "b) x ≥ 4", "c) x ≤ 4", "d) x > 4"],
    "answer": "b",
    "explanation": "The square root function is undefined for negative values. Therefore, the domain of g(x) is x ≥ 4."
  },
  {
    "question": "What is the inverse of the function h(x) = 2x + 1?",
    "options": ["a) f(x) = (x - 1)/2", "b) f(x) = (x + 1)/2", "c) f(x) = (x - 2)/1", "d) f(x) = (x + 2)/1"],
    "answer": "a",
    "explanation": "To find the inverse, switch x and y and solve for y. In this case, x = 2y + 1. Solving for y, we get y = (x - 1)/2. Therefore, the inverse of h(x) is f(x) = (x - 1)/2."
  },
  {
    "question": "What is the period of the function j(x) = sin(3x)?",
    "options": ["a) 2π", "b) π", "c) 3π", "d) 6π"],
    "answer": "c",
    "explanation": "The period of a sine function is 2π divided by the coefficient of x. In this case, the coefficient of x is 3, so the period is 2π/3 = 3π."
  },
  {
    "question": "What is the amplitude of the function k(x) = 2cos(x/2)?",
    "options": ["a) 1/2", "b) 2", "c) 1", "d) 4"],
    "answer": "b",
    "explanation": "The amplitude of a cosine function is the absolute value of the coefficient of the cosine term. In this case, the coefficient is 2, so the amplitude is 2."
  },
  {
    "question": "What is the equation of the asymptotes of the function l(x) = (x^2 - 1)/(x - 2)?",
    "options": ["a) x = 1 and y = 2", "b) x = -1 and y = -2", "c) x = 2 and y = 1", "d) x = -2 and y = -1"],
    "answer": "c",
    "explanation": "The vertical asymptote of a rational function occurs where the denominator is equal to zero. In this case, the denominator is zero when x = 2. The horizontal asymptote occurs when the degree of the numerator is less than or equal to the degree of the denominator. In this case, both the numerator and denominator have a degree of 2, so the horizontal asymptote is y = 1 (the ratio of the leading coefficients). Therefore, the equations of the asymptotes are x = 2 and y = 1."
  },
  {
    "question": "What is the end behavior of the function m(x) = -x^4 + 2x^2 - 1?",
    "options": ["a) As x approaches positive or negative infinity, m(x) approaches positive infinity.", "b) As x approaches positive or negative infinity, m(x) approaches negative infinity.", "c) As x approaches positive or negative infinity, m(x) approaches zero.", "d) As x approaches positive or negative infinity, m(x) approaches 1."],
    "answer": "b",
    "explanation": "The end behavior of a polynomial function is determined by the leading term. In this case, the leading term is -x^4, which is negative. As x approaches positive or negative infinity, the value of -x^4 becomes increasingly negative. Therefore, the end behavior is that m(x) approaches negative infinity."
  },
  {
    "question": "What is the equation of the tangent line to the graph of the function n(x) = e^x at x = 1?",
    "options": ["a) y = e", "b) y = e(x - 1)", "c) y = e + e(x - 1)", "d) y = e + x"],
    "answer": "c",
    "explanation": "The equation of the tangent line to the graph of a function f(x) at x = a is y = f(a) + f'(a)(x - a). In this case, f(x) = e^x, f'(x) = e^x, and a = 1. Therefore, f(1) = e, f'(1) = e, and the equation of the tangent line is y = e + e(x - 1)."
  }
]
