export class Post {
  _id: string;
  title: string;
  description: string;
  rating: any;
  publishedAt: Date;
  userId: any;
  imageUrl: string;

  public constructor(init?:Partial<Post>) {
    Object.assign(this, init);
  }

}