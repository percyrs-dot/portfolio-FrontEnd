export interface User {
  id: number;
  name: string;
  profileBg: string;
  profilePic: string;
  currentPosition: string;
  location: string;
  about: string;
}

export interface Experience {
  id: number;
  name: string;
  position: string;
  timeStart: number;
  timeEnd: number;
  location: string;
  img: string;
  url: string;
}

export interface Education {
  id: number;
  name: string;
  title: string;
  timeStart: number;
  timeEnd: number;
  location: string;
  img: string;
  url: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  year: number;
  img: string;
  url: string;
}
