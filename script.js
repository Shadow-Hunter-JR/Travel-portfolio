// ===== WELCOME MESSAGE (Required - 5 points) =====
// This function displays a welcoming message only on the index page
function displayWelcomeMessage() {
  // Check if we're on the index page
  const currentPage = window.location.pathname
  const isIndexPage = currentPage.endsWith("index.html") || currentPage === "/" || currentPage.endsWith("/")

  if (isIndexPage) {
    const welcomeDiv = document.getElementById("welcome-message")
    if (welcomeDiv) {
      const messages = [
        "🌟 Welcome to my creative world! Explore my journey through photography and art! 🌟",
        "✨ Hello there! Thanks for visiting my personal portfolio website! ✨",
        "🎨 Greetings! Discover the stories behind my favorite captures and creations! 🎨",
        "📸 Welcome! Step into my visual diary of adventures and artistic expressions! 📸",
      ]

      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      welcomeDiv.innerHTML = randomMessage

      // Add a fade-in effect
      welcomeDiv.style.opacity = "0"
      setTimeout(() => {
        welcomeDiv.style.opacity = "1"
      }, 500)
    }
  }
}

// ===== INTERACTIVE JS FUNCTION (Required - 10 points) =====
// Color Mood Generator - Takes user input and generates a personalized color mood
function generateMood() {
  const userName = document.getElementById("userName").value.trim()
  const resultDiv = document.getElementById("moodResult")

  if (!userName) {
    resultDiv.innerHTML = "⚠️ Please enter your name first!"
    resultDiv.style.background = "linear-gradient(45deg, #ff6b6b, #feca57)"
    resultDiv.style.color = "white"
    return
  }

  // Create mood based on name characteristics
  const nameLength = userName.length
  const firstLetter = userName.charAt(0).toLowerCase()
  const vowels = "aeiou"
  const hasVowelStart = vowels.includes(firstLetter)

  const moods = [
    {
      name: "Sunset Dreamer",
      color: "linear-gradient(45deg, #ff9a9e, #fecfef)",
      description: "You have a warm, optimistic spirit that lights up any room!",
      emoji: "🌅",
    },
    {
      name: "Ocean Explorer",
      color: "linear-gradient(45deg, #a8edea, #fed6e3)",
      description: "You possess a deep, calming presence like the endless sea!",
      emoji: "🌊",
    },
    {
      name: "Forest Wanderer",
      color: "linear-gradient(45deg, #d299c2, #fef9d7)",
      description: "You have a grounded, natural wisdom that grows stronger each day!",
      emoji: "🌲",
    },
    {
      name: "Cosmic Thinker",
      color: "linear-gradient(45deg, #667eea, #764ba2)",
      description: "You have an expansive mind that reaches for the stars!",
      emoji: "⭐",
    },
    {
      name: "Golden Creator",
      color: "linear-gradient(45deg, #f093fb, #f5576c)",
      description: "You have a creative spark that turns everything into gold!",
      emoji: "✨",
    },
    {
      name: "Rainbow Spirit",
      color: "linear-gradient(45deg, #4facfe, #00f2fe)",
      description: "You bring joy and color to everyone around you!",
      emoji: "🌈",
    },
  ]

  // Select mood based on name characteristics
  let moodIndex
  if (hasVowelStart) {
    moodIndex = nameLength % 3 // First 3 moods for vowel starters
  } else {
    moodIndex = (nameLength % 3) + 3 // Last 3 moods for consonant starters
  }

  const selectedMood = moods[moodIndex]

  // Display the result with animation
  resultDiv.style.background = selectedMood.color
  resultDiv.style.color = "white"
  resultDiv.style.transform = "scale(0.8)"

  setTimeout(() => {
    resultDiv.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 10px;">${selectedMood.emoji}</div>
                <div style="font-size: 1.3rem; margin-bottom: 10px;">Hello ${userName}!</div>
                <div style="font-size: 1.1rem; margin-bottom: 5px;">Your mood color is: <strong>${selectedMood.name}</strong></div>
                <div style="font-size: 1rem;">${selectedMood.description}</div>
            </div>
        `
    resultDiv.style.transform = "scale(1)"
  }, 200)
}

// ===== ADDITIONAL INTERACTIVE FUNCTIONS =====
// Smooth scroll to gallery section
function scrollToGallery() {
  const gallerySection = document.getElementById("gallery-section")
  if (gallerySection) {
    gallerySection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Handle contact form submission
function handleFormSubmit(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Simple form validation and feedback
  if (name && email && subject && message) {
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon at ${email}.`)

    // Reset form
    event.target.reset()
  } else {
    alert("Please fill in all fields before submitting.")
  }
}

// ===== ADDITIONAL ENHANCEMENTS =====
// Add typing effect to hero title (only on index page)
function addTypingEffect() {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle && window.location.pathname.includes("index")) {
    const originalText = heroTitle.textContent
    heroTitle.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(typeWriter, 1000)
  }
}

// Add parallax effect to hero section
function addParallaxEffect() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })
}

// Initialize all functions when page loads
document.addEventListener("DOMContentLoaded", () => {
  displayWelcomeMessage()
  addTypingEffect()
  addParallaxEffect()

  // Add smooth scrolling to all navigation links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only prevent default for anchor links on same page
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    })
  })

  // Add loading animation to gallery images
  const galleryImages = document.querySelectorAll(".gallery-item img, .gallery-item-full img")
  galleryImages.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "0"
      this.style.transition = "opacity 0.5s ease"
      setTimeout(() => {
        this.style.opacity = "1"
      }, 100)
    })
  })
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Press 'H' to go to home
  if (e.key.toLowerCase() === "h" && !e.ctrlKey && !e.altKey) {
    window.location.href = "index.html"
  }
  // Press 'G' to go to gallery
  if (e.key.toLowerCase() === "g" && !e.ctrlKey && !e.altKey) {
    window.location.href = "gallery.html"
  }
})
