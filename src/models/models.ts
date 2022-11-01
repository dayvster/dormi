export interface IVariable {
  uid: string;
  name: string;
  key: string;
  value: string;
  enabled: boolean;
  environment: string; // UID of the environment
}
export interface IEnvironment {
  uid: string;
  name: string;
  description: string;
  created: Date;
  updated: Date;
  variables: IVariable[];
}

export interface ICollection {
  uid: string;
  name: string;
  description: string;
  created: Date;
  updated: Date;
  environments?: IEnvironment[];
  folders?: IFolder[];
}

export interface IFolder {
  uid: string;
  name: string;
  description: string;
  created: Date;
  updated: Date;
  requests: string[]; // request uids
  folders: IFolder[]; // nested folders
  collection: string; // collection uid
}

export interface IRequest {
  uid: string;
  name: string;
  description: string;
  created: Date;
  updated: Date;
  method:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "PATCH"
    | "HEAD"
    | "OPTIONS"
    | "TRACE"
    | "CONNECT"
    | "CUSTOM";
  url: URL;
  headers: string;
  body: string;
  auth: {
    type: "basic" | "bearer" | "digest" | "hawk" | "ntlm" | "oauth1" | "awsv4";
    username?: string;
    password?: string;
    token?: string;
  };
  folder: string; // uid of folder
}
