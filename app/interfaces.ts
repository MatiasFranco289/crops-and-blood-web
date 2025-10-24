export interface Project {
  id: number;
  name: string;
  logo: string | null;
  status: ProjectStatus;
  public: boolean;
  start_date: string;
  end_date: string | null;
  estimated_end: string | null;
  created_at: string;
  updated_at: string;
  tags: Array<ProjectTag>;
  creator_id: number;
  short_description: string;
  long_description: string;
  pagination: Pagination;
}

export type ProjectStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "PAUSED"
  | "FINISHED"
  | "DRAFT"
  | "DISCARDED"
  | "CANCELED";

interface Pagination {
  offset: number;
  limit: number;
  count: number;
  total: number;
}

export interface ProjectTag {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectDetails extends Project {
  collaborators: Array<Collaborator>;
  technologies: Array<Technology>;
  media: Array<Media>;
  external_resources: Array<ExternalResource>;
}

export interface Technology {
  id: number;
  name: string;
}

export interface Media {
  id: number;
  url: string;
  type: string;
}

export interface ExternalResource {
  id: number;
  url: string;
  type:
    | "GITHUB"
    | "BITBUCKET"
    | "OTHER_REPO"
    | "JIRA"
    | "TRELLO"
    | "CONFLUENCE"
    | "DRIVE"
    | "OTHER"
    | "WEB";
  name: string;
}

export interface Collaborator {
  id: number;
  username: string;
  profile_photo: string;
  project_role_id: number;
  project_role_name: string;
}

export interface Blog {
  id: number;
  user_id: number;
  project_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}
