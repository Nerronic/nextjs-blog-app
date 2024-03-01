import Comments from "@/app/components/comments";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 text-black">
      Blog-Detail-Page
      <h1 className="text-3xl font-bold">Post one</h1>
      <p> Written by John Doe</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        cumque ex et temporibus adipisci cupiditate, rem cum debitis iste, ab
        harum voluptatem veniam a vel voluptatum doloribus quidem animi.
        Dolores!
      </div>
      <Comments />
    </div>
  );
};

export default BlogDetailPage;
