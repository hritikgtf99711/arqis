
import { apiCache } from "./apicache";
import { API_BASE_URL } from "../../../config";
async function fetchApi(endpoint, options = {}) {
  try {
    const cached = apiCache[endpoint];
    const now = Date.now();

    // If cache exists and is fresh (60 sec), return it
    if (cached && now - cached.timestamp < 60 * 1000) {
      return cached.data;
    }

    const headers = { ...(options.headers || {}) };

    if (!(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers,
      ...options,
      next: { revalidate: 60 }, // ✅ ensures ISR caching
    });

    if (!res.ok) {
      console.warn(`⚠️ API failed [${endpoint}] with status ${res.status}`);
      return null; // fallback instead of throw
    }

    const data = await res.json();

    apiCache[endpoint] = { data, timestamp: now };

    return data;
  } catch (error) {
    console.error(`❌ API fetch error [${endpoint}]:`, error);
    return null; // return null on error
  }
}


export const postApi = (endpoint, body, options = {}) => {
  const isFormData = body instanceof FormData;

  return fetchApi(endpoint, {
    method: "POST",
    body: isFormData ? body : JSON.stringify(body),
    ...options,
  });
};


//common
export const getPageRecord = (slug) => fetchApi(`page/${slug}`);
export const getSectionData = (section) => fetchApi(`section/${section}`);
export const getPageData = (slug) => fetchApi(`${slug}`)

// home

export const getTimeline = () => fetchApi("get-timeline?limit=50&order_by=DESC");

//aboutus
export const getTestimonials = () => fetchApi("testimonial");
export const getTeams = () => fetchApi("website/team");
export const getjobs = () => fetchApi("website/jobs");
export const getMission = () => fetchApi("website/section/about_mission");
export const getExperience = () => fetchApi("website/section/about_experience");
export const getVission = () => fetchApi("website/section/about_vision");


export const getOverview = () => fetchApi("website/section/about_overview");
export const getStory = (slug) => fetchApi(`/our-story-and-manifastro/${slug}`).then(res => res.data || []);

//platter
export const getPlatter = () => fetchApi("platter");
export const getPlatterData = (platter) => fetchApi(`get-platterdata/${platter}`);
export const getPlatterProjects = (platter) => fetchApi(`getplatter-projects/${platter}`);

//project
export const getProjects = () => 
  fetchApi(`website/page/our-project`);
export const getProjectBySlug = (slug) => fetchApi(`project/${slug}`);
export const getProjectSection = (id,slug)=> fetchApi(`/project/${id}/${slug}`)
export const getProjectMasterPlans = (id) => fetchApi(`/project/${id}/floor-plans?type=masterplan`);
export const getProjectFloorPlans = (id) => fetchApi(`/project/${id}/floor-plans?type=floorplan`);
export const getProjectLocationAdvantage = (id) => fetchApi(`/project/${id}/location-advantage`);
export const getProjectGallery = (slug) => fetchApi(`project/${slug}/gallery`);



//csr
export const getCsrGallery = () => fetchApi("csr-galleries/2025");


//Media center
export const getMediaNews = () => fetchApi('website/news');
export const getBlogs = (limit, order, page = 1) => 
  fetchApi(`website/blog?order_by=${order}&limit=${limit}&page=${page}`);
export const getBlogDetails = (slug)=>fetchApi(`/blog/${slug}`)
//career
export const submitCareerForm = (payload) =>
  postApi("website/job-form", payload);
//career
export const submitContactForm = (payload) =>
  postApi("save-enquiry", payload);

//awards
export const getAwardGallery = (year)=> fetchApi(`award-gallery/${year}`)
//gallery
export const fetchGallery = (tabId,subtabId)=>fetchApi(`get-gallery-by-platter-and-status/${tabId}/${subtabId}`)
export const fetchEventYear = ()=> fetchApi(`/get-years/event-galleries`)
export const fetchEventGalleries = (year)=> fetchApi(`/event-galleries/${year}`)

