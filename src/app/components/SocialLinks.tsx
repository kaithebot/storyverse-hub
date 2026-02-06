import Link from 'next/link';

export default function SocialLinks() {
  const socials = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Facebook', icon: '👥', href: '#' },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 transition"
          aria-label={social.name}
        >
          <span className="text-xl">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
}
