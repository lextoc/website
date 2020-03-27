export interface INotification {
  content: string;
  link: string;
  visible: boolean;
}

export interface ICaseObj {
  name: string;
  description: string;
  link: string;
  cardimage: {
    url: string;
  };
}
