// Embedded Video Data
// Replace this array with your actual video data
const videosData = {
  "videos": [
    {
      "id": "LseLVNUG-sk",
      "title": "Git Tutorial: Push Your First Project to GitHub (2025)",
      "description": "Git Tutorial: Push Your First Project to GitHub (2025). Learn how to initialize a repo, stage files, commit, and push to GitHub.",
      "thumbnail": "https://i.ytimg.com/vi/LseLVNUG-sk/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=LseLVNUG-sk",
      "date": "2025-12-09",
      "duration": "08:27",
      "tags": [
        "git",
        "github",
        "tutorial"
      ]
    },
    {
      "id": "mBvuF18F6h0",
      "title": "Run Local ChatGPT-Level AI on YOUR PC - No Cloud, No API Keys (llama.cpp)",
      "description": "Run Local ChatGPT-Level AI on YOUR PC - No Cloud, No API Keys (llama.cpp). A guide to running LLMs locally using llama.cpp.",
      "thumbnail": "https://i.ytimg.com/vi/mBvuF18F6h0/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=mBvuF18F6h0",
      "date": "2025-11-28",
      "duration": "10:47",
      "tags": [
        "ai",
        "llama.cpp",
        "local ai"
      ]
    },
    {
      "id": "-88EOZpelEo",
      "title": "How to Install Git on Windows 11 & First-Time Setup (2025)",
      "description": "How to Install Git on Windows 11 & First-Time Setup (2025). Step-by-step guide to installing Git and configuring user details.",
      "thumbnail": "https://i.ytimg.com/vi/-88EOZpelEo/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=-88EOZpelEo",
      "date": "2025-11-17",
      "duration": "04:02",
      "tags": [
        "git",
        "windows 11",
        "install"
      ]
    },
    {
      "id": "MH4b84lqkd4",
      "title": "How to Install Docker on Windows 11 with WSL 2 (The Right Way)",
      "description": "How to Install Docker on Windows 11 with WSL 2 (The Right Way). A complete guide to setting up Docker Desktop with WSL 2 integration.",
      "thumbnail": "https://i.ytimg.com/vi/MH4b84lqkd4/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=MH4b84lqkd4",
      "date": "2025-10-16",
      "duration": "03:51",
      "tags": [
        "docker",
        "wsl 2",
        "windows 11"
      ]
    },
    {
      "id": "3YlxYZK1x_o",
      "title": "Run DeepSeek R1 Locally on Windows - FREE AI with Ollama (8GB VRAM)",
      "description": "Run DeepSeek R1 Locally on Windows - FREE AI with Ollama (8GB VRAM). Learn how to run the DeepSeek R1 model locally using Ollama.",
      "thumbnail": "https://i.ytimg.com/vi/3YlxYZK1x_o/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=3YlxYZK1x_o",
      "date": "2025-10-05",
      "duration": "06:00",
      "tags": [
        "deepseek",
        "ollama",
        "ai"
      ]
    },
    {
      "id": "CkOS4ExPa3s",
      "title": "How to Install WSL 2 & Ubuntu on Windows 11 (The Complete Guide for 2025)",
      "description": "How to Install WSL 2 & Ubuntu on Windows 11 (The Complete Guide for 2025). Install Linux on Windows using WSL 2 and Ubuntu.",
      "thumbnail": "https://i.ytimg.com/vi/CkOS4ExPa3s/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=CkOS4ExPa3s",
      "date": "2025-09-18",
      "duration": "10:53",
      "tags": [
        "wsl 2",
        "ubuntu",
        "windows 11"
      ]
    },
    {
      "id": "-Wg2r1lWrTc",
      "title": "How To Set Environment For Python In Windows (Complete Guide)",
      "description": "How To Set Environment For Python In Windows (Complete Guide). Learn to manage Python virtual environments and requirements.txt.",
      "thumbnail": "https://i.ytimg.com/vi/-Wg2r1lWrTc/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=-Wg2r1lWrTc",
      "date": "2025-09-18",
      "duration": "08:12",
      "tags": [
        "python",
        "environment",
        "windows"
      ]
    },
    {
      "id": "Z7IgVaxUpBE",
      "title": "How to Install Python on Windows 11 (Step-by-Step Guide for Beginners)",
      "description": "How to Install Python on Windows 11 (Step-by-Step Guide for Beginners). A beginner's guide to installing the latest Python version.",
      "thumbnail": "https://i.ytimg.com/vi/Z7IgVaxUpBE/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Z7IgVaxUpBE",
      "date": "2025-09-18",
      "duration": "05:07",
      "tags": [
        "python",
        "install",
        "windows 11"
      ]
    },
    {
      "id": "Wwe37IcCJtg",
      "title": "How to Install Visual Studio Code on Windows 11 (The PROPER Setup)",
      "description": "How to Install Visual Studio Code on Windows 11 (The PROPER Setup). Install and configure VS Code for the best development experience.",
      "thumbnail": "https://i.ytimg.com/vi/Wwe37IcCJtg/mqdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Wwe37IcCJtg",
      "date": "2025-11-04",
      "duration": "03:19",
      "tags": [
        "vscode",
        "windows 11",
        "setup"
      ]
    }
  ]
};

// State
let currentFilter = 'all';
let searchQuery = '';

// Get unique tags from all videos
function getAllTags() {
  const tagsSet = new Set();
  videosData.videos.forEach(video => {
    video.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

// Filter videos based on current filter and search query
function getFilteredVideos() {
  return videosData.videos.filter(video => {
    // Filter by tag
    const matchesFilter = currentFilter === 'all' || video.tags.includes(currentFilter);
    
    // Search in description and tags
    const matchesSearch = searchQuery === '' || 
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Render video card
function renderVideoCard(video) {
  return `
    <div class="video-card">
      <div class="video-thumbnail">
        <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
        <span class="video-duration">${video.duration}</span>
      </div>
      <div class="video-content">
        <h3 class="video-title">${video.title}</h3>
        <div class="video-meta">
          <span>${formatDate(video.date)}</span>
        </div>
        <p class="video-description">${video.description}</p>
        <div class="video-tags">
          ${video.tags.map(tag => `
            <span class="tag" data-tag="${tag}">${tag}</span>
          `).join('')}
        </div>
        <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary video-link">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg>
          Watch on YouTube
        </a>
      </div>
    </div>
  `;
}

// Render videos
function renderVideos() {
  const videoList = document.getElementById('video-list');
  const filteredVideos = getFilteredVideos();
  
  if (filteredVideos.length === 0) {
    videoList.innerHTML = `
      <div class="empty-state">
        <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <h3>No videos found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
  } else {
    videoList.innerHTML = filteredVideos.map(video => renderVideoCard(video)).join('');
    
    // Add click handlers to tags in video cards
    document.querySelectorAll('.video-tags .tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.preventDefault();
        const tagName = tag.dataset.tag;
        setFilter(tagName);
      });
    });
  }
}

// Render filter tags
function renderFilterTags() {
  const filterTags = document.getElementById('filter-tags');
  const allTags = getAllTags();
  
  const tagsHtml = `
    <button class="tag ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">
      All Videos
    </button>
    ${allTags.map(tag => `
      <button class="tag ${currentFilter === tag ? 'active' : ''}" data-filter="${tag}">
        ${tag}
      </button>
    `).join('')}
  `;
  
  filterTags.innerHTML = tagsHtml;
  
  // Add click handlers
  document.querySelectorAll('#filter-tags .tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const filter = tag.dataset.filter;
      setFilter(filter);
    });
  });
}

// Set filter
function setFilter(filter) {
  currentFilter = filter;
  renderFilterTags();
  renderVideos();
}

// Search handler
function handleSearch(query) {
  searchQuery = query;
  renderVideos();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Render initial state
  renderFilterTags();
  renderVideos();
  
  // Setup search
  const searchInput = document.getElementById('video-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });
  }
  
  // Update video count
  const videoCount = document.getElementById('video-count');
  if (videoCount) {
    videoCount.textContent = videosData.videos.length;
  }
});
