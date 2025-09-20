const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="text-base-content/70">{subtitle}</p>}
    </div>
  </div>
);

export default SectionHeader;
