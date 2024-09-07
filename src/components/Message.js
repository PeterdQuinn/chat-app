// components/Message.js
export default function Message({ sender, content }) {
    return (
      <div className="flex items-start mb-4">
        <div className="mr-2 font-bold">{sender}:</div>
        <div className="bg-gray-100 p-2 rounded-lg">{content}</div>
      </div>
    );
  }
  