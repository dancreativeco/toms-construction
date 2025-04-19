const SummaryCard = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <p className="font-semibold text-xl text-gray-900">{value}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500">{change}</p>
    </div>
  );
};

export default SummaryCard; 