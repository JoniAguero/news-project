export class Comment {
  _id: string;
  content: string;
  rating: any;
  publishedAt: Date;
  userId: string;
  postId: string;

  public constructor(init?:Partial<Comment>) {
    Object.assign(this, init);
  }

}