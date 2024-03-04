const Comments = () => {
  return (
    <div className="mt-8 text-black">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        <li className="mb-4 bg-slate-300 p-2">
          <div className="flex items-center mb-2">
            <div className="text-blue-500 font-bold mr-4"> John Doe</div>
            <div className="text-gray-500">10-November-2023</div>
          </div>
          <p> Awesome work!</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
