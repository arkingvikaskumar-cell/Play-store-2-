import { useState } from 'react';
import {
  BadgeCheck,
  Star,
  MonitorSmartphone,
  ArrowRight,
  MoreVertical,
  Search,
  Menu,
  Info,
  Loader2
} from 'lucide-react';

const REVIEWS = [
  { id: 1, name: "Vikas Kumar", date: "24 May 2026", rating: 5, text: "Bahut badiya app hai, fast withdrawal and easy to play. Maza aa gaya khel kar.", avatarInitial: "V" },
  { id: 2, name: "Rahul Sharma", date: "23 May 2026", rating: 5, text: "Best cricket app ever seen. 100% trusted and genuine platform.", avatarInitial: "R" },
  { id: 3, name: "Amit Singh", date: "22 May 2026", rating: 5, text: "Mujhe welcome bonus mila, totally recommended! Customer support is fast.", avatarInitial: "A" },
  { id: 4, name: "Priya Patel", date: "21 May 2026", rating: 4, text: "Genuine app. Interface could be slightly better but overall good experience.", avatarInitial: "P" },
  { id: 5, name: "Sunil Yadav", date: "19 May 2026", rating: 5, text: "Super smooth interface. No lag during live matches which is crucial.", avatarInitial: "S" },
  { id: 6, name: "Mohit Verma", date: "18 May 2026", rating: 5, text: "Love the UI. Winning chances are high compared to others.", avatarInitial: "M" },
  { id: 7, name: "Neha Gupta", date: "15 May 2026", rating: 5, text: "Very good app for daily fantasy and betting. Safe to use.", avatarInitial: "N" },
  { id: 8, name: "Rohit Ranjan", date: "14 May 2026", rating: 5, text: "Instant cashout is the best feature. Got my money in 5 mins.", avatarInitial: "R" },
  { id: 9, name: "Aakash Deep", date: "12 May 2026", rating: 4, text: "Safe and secure option for sports prediction. Recommended.", avatarInitial: "A" },
  { id: 10, name: "Surya V.", date: "10 May 2026", rating: 5, text: "Awesome experience so far. Highly advised for cricket fans.", avatarInitial: "S" },
  { id: 11, name: "Manoj Das", date: "8 May 2026", rating: 5, text: "I have been using this for 2 months, no issues at all. Great app.", avatarInitial: "M" },
  { id: 12, name: "Karan T.", date: "5 May 2026", rating: 5, text: "Great odds compared to other apps in the market.", avatarInitial: "K" },
  { id: 13, name: "Dinesh S.", date: "2 May 2026", rating: 5, text: "Sign up process is very simple and fast. KYC was done instantly.", avatarInitial: "D" },
  { id: 14, name: "Harish K.", date: "28 April 2026", rating: 5, text: "Best app in India for this category. Must try.", avatarInitial: "H" },
  { id: 15, name: "Vikram M.", date: "25 April 2026", rating: 5, text: "Loving the extra gifts on every deposit! Fantastic rewards.", avatarInitial: "V" }
];

export default function App() {
  const [installState, setInstallState] = useState<'idle' | 'downloading' | 'installed'>('idle');

  const handleInstall = () => {
    if (installState !== 'idle') return;
    
    setInstallState('downloading');
    
    // Use direct Dropbox content URL for better Android file handling
    window.location.href = "https://dl.dropboxusercontent.com/scl/fi/i5byzvw2kjp5p7wgbxm3l/Fantasy-11.apk?rlkey=qx07s51kp1a4figebz6bu2cwl&st=ug7fbcnq&dl=1";

    // Simulate completion after a realistic delay
    setTimeout(() => {
      setInstallState('installed');
    }, 2500);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-sans text-gray-900 pb-10 selection:bg-green-100">
      <main>
        {/* App Header Section */}
        <div className="px-5 pt-6 pb-4">
          <div className="flex gap-5">
            {/* App Icon */}
            <div className="w-20 h-20 bg-[#0f172a] border border-blue-900 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden bg-gradient-to-br from-blue-900 to-black">
               <div className="flex flex-col items-center justify-center relative z-10 w-full">
                 <div className="text-yellow-400 font-extrabold text-[24px] tracking-tighter leading-none drop-shadow-md" style={{ fontFamily: 'sans-serif' }}>11</div>
                 <span className="text-white font-black text-[11px] tracking-wider mt-0.5 uppercase drop-shadow-md">Fantasy</span>
               </div>
            </div>

            {/* App Info */}
            <div className="flex flex-col justify-center flex-1">
              <h1 className="text-2xl font-medium tracking-tight leading-tight flex items-center flex-wrap gap-1 mb-1">
                Fantasy 11
                <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500 text-white inline-block relative top-[-1px]" />
              </h1>
              <span className="text-[#01875F] text-sm font-medium mb-1">Fantasy 11 India</span>
              <span className="text-gray-500 text-xs">Contains ads • In-app purchases</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between px-6 py-4 mx-2">
          {/* Rating */}
          <div className="flex flex-col items-center flex-1">
             <div className="flex items-center gap-0.5 text-[15px] font-bold text-gray-800">
               4.9 <Star className="w-3.5 h-3.5 fill-black text-black mb-[2px]" />
             </div>
             <span className="text-xs text-gray-500 font-medium">Rating</span>
          </div>

          <div className="w-px h-6 bg-gray-200"></div>

          {/* Downloads */}
          <div className="flex flex-col items-center flex-1">
             <div className="text-[15px] font-bold text-gray-800">1.3M+</div>
             <span className="text-xs text-gray-500 font-medium">Downloads</span>
          </div>

          <div className="w-px h-6 bg-gray-200"></div>

          {/* Editor's Choice */}
          <div className="flex flex-col items-center flex-1">
             <div className="flex items-center justify-center h-[22px]">
               <BadgeCheck className="w-5 h-5 text-gray-800 stroke-[1.5]" />
             </div>
             <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Editor's choice</span>
          </div>

           <div className="w-px h-6 bg-gray-200"></div>

          {/* Age Rating */}
           <div className="flex flex-col items-center flex-1">
             <div className="flex items-start h-[22px]">
               <span className="border border-gray-800 text-gray-800 text-[10px] font-bold px-1 rounded-sm tracking-tighter">21+</span>
               <Info className="w-3 h-3 text-gray-500 ml-0.5" />
             </div>
             <span className="text-xs text-gray-500 font-medium mt-[1px]">21+</span>
          </div>
        </div>

        {/* Install Button */}
        <div className="px-5 mt-2">
           <button 
             onClick={handleInstall}
             disabled={installState === 'downloading'}
             className={`w-full text-white py-2.5 rounded-lg font-medium text-[15px] transition-colors flex items-center justify-center gap-2 ${
               installState === 'installed' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-[#01875F] active:bg-[#01704e] disabled:bg-[#01704e]/80'
             }`}
           >
              {installState === 'idle' && 'Install'}
              {installState === 'downloading' && (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Downloading...
                </>
              )}
              {installState === 'installed' && 'Open'}
           </button>
        </div>

        {/* Devices Availability */}
        <div className="px-5 py-4 flex items-start gap-3 mt-1">
           <MonitorSmartphone className="w-5 h-5 text-gray-500 mt-0.5" />
           <p className="text-sm text-gray-600">This app is available for all of your devices</p>
        </div>

        {/* Screenshots */}
        <div className="px-5 pt-2 pb-6">
           <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Premium Screenshot 1 Mockup */}
              <div className="relative min-w-[220px] w-[220px] h-[390px] bg-gradient-to-br from-[#0b0f19] via-[#1a233a] to-[#0b0f19] rounded-2xl flex-shrink-0 snap-center overflow-hidden border border-gray-200/50 shadow-sm">
                 {/* Stadium Lights / Glow */}
                 <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent blur-xl"></div>
                 <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>

                 {/* Grid pattern overlay */}
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>

                 <div className="relative pt-6 px-3 pb-4 h-full flex flex-col items-center">
                    {/* Badge */}
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-300 text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 shadow-[0_0_10px_rgba(251,191,36,0.5)] border border-yellow-200">
                      #1 Trusted Platform
                    </div>

                    <h2 className="text-white font-black text-[22px] leading-[1.1] tracking-tighter text-center drop-shadow-lg">
                      PLAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">FANTASY</span><br/>CRICKET
                    </h2>

                    {/* Match Card Graphic */}
                    <div className="mt-auto mb-6 w-full relative">
                        {/* Glow behind card */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                        
                        {/* Match Card */}
                        <div className="relative w-full bg-[#1e293b]/90 backdrop-blur-md border border-slate-600 rounded-xl p-3 shadow-2xl">
                            <div className="text-center text-[9px] text-slate-300 font-bold tracking-widest mb-2 uppercase">Mega Contest</div>
                            
                            <div className="flex justify-between items-center px-1">
                               {/* Team 1 */}
                               <div className="flex flex-col items-center gap-1 z-10 w-12 text-center">
                                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-700 to-indigo-900 border-2 border-yellow-400 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)] relative overflow-hidden">
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]"></div>
                                    <span className="text-yellow-400 font-black text-xs italic tracking-tighter scale-y-110">KKR</span>
                                  </div>
                               </div>

                               {/* VS */}
                               <div className="relative flex flex-col items-center justify-center px-2">
                                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center z-10 shadow-inner">
                                    <span className="text-white font-black italic text-[10px]">VS</span>
                                  </div>
                                  <span className="text-[7px] text-red-500 font-bold mt-1.5 uppercase tracking-wider bg-red-500/10 px-1.5 py-0.5 rounded-full border border-red-500/20 animate-pulse">LIVE</span>
                               </div>

                               {/* Team 2 */}
                               <div className="flex flex-col items-center gap-1 z-10 w-12 text-center">
                                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 border-2 border-yellow-400 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)] relative overflow-hidden">
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]"></div>
                                    <span className="text-white font-black text-xs italic tracking-tighter scale-y-110">MI</span>
                                  </div>
                               </div>
                            </div>
                            
                            {/* Prize Pool */}
                            <div className="mt-3.5 bg-gradient-to-r from-green-900/60 to-emerald-900/60 border border-green-500/30 rounded-lg p-1.5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                               <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 rotate-45 transform translate-x-4 -translate-y-4"></div>
                               <span className="text-[8px] text-green-300 font-bold uppercase tracking-wider">Prize Pool</span>
                               <span className="text-yellow-400 font-black text-[13px] tracking-tight drop-shadow-md">₹10 Crores</span>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Screenshot 2 Mockup */}
              <div className="relative min-w-[220px] w-[220px] h-[390px] bg-gradient-to-b from-[#2a4e21] to-[#122210] rounded-2xl flex-shrink-0 snap-center overflow-hidden border border-gray-200/50 shadow-sm flex flex-col items-center">
                 <div className="pt-5 px-4 text-center w-full">
                    <h2 className="text-[#bbed21] font-black text-4xl leading-none tracking-tighter drop-shadow-md">
                      1000%
                    </h2>
                    <p className="text-white font-bold text-sm leading-tight mt-1">WELCOME BONUS</p>
                    <p className="text-[#bbed21] text-[10px] font-bold uppercase mt-1">UP TO ₹70,000+5 EXTRA GIFTS</p>
                 </div>
                 
                 {/* Inner Phone Mockup */}
                 <div className="mt-4 w-[160px] h-full bg-[#1c1c1c] rounded-t-3xl border-4 border-b-0 border-gray-800 p-2 shadow-xl flex flex-col">
                    <div className="flex justify-center mb-3 mt-1">
                       <span className="text-white font-bold text-xs tracking-tight">Fantasy</span>
                       <span className="bg-blue-600 text-white text-[8px] font-black uppercase px-1 rounded-sm ml-1">11</span>
                    </div>
                    {/* Mock Betting Rows */}
                    <div className="space-y-2 mt-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="bg-gray-800 rounded p-1 mb-1 flex justify-between items-center text-[8px]">
                            <span className="text-gray-300">Mumbai vs CSK</span>
                            <span className="bg-blue-500 text-white font-bold px-2 py-0.5 rounded">PLAY</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <hr className="border-gray-200 block" />

        {/* About App Menu Item */}
        <div className="px-6 py-5 flex items-center justify-between active:bg-gray-50 transition-colors cursor-pointer">
           <h2 className="text-[19px] font-medium text-gray-800">About this app</h2>
           <ArrowRight className="w-6 h-6 text-gray-500" />
        </div>

        <hr className="border-gray-200 block" />

        {/* Ratings and Reviews Section */}
        <div className="px-6 py-5">
           <div className="flex items-center justify-between mb-6">
              <h2 className="text-[19px] font-medium text-gray-800">Ratings and reviews</h2>
              <ArrowRight className="w-6 h-6 text-gray-500" />
           </div>

           <div className="flex gap-6 mb-8 items-center">
              <div className="text-[52px] font-medium tracking-tighter leading-none text-gray-900">4.9</div>
              <div className="flex flex-col flex-1 max-w-[200px]">
                 <div className="flex items-center gap-[2px] mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#01875F] text-[#01875F]" />)}
                 </div>
                 <div className="flex items-center justify-between text-xs text-gray-500 mb-0.5">
                    <span className="w-2 font-medium">5</span>
                    <div className="flex-1 h-2 bg-[#01875F] rounded-full mx-2"></div>
                 </div>
                 <div className="flex items-center justify-between text-xs text-gray-500 mb-0.5">
                    <span className="w-2 font-medium">4</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2"><div className="w-[10%] h-full bg-[#01875F] rounded-full"></div></div>
                 </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-0.5">
                    <span className="w-2 font-medium">3</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2"></div>
                 </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-0.5">
                    <span className="w-2 font-medium">2</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2"></div>
                 </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="w-2 font-medium">1</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full mx-2"><div className="w-[2%] h-full bg-[#01875F] rounded-full"></div></div>
                 </div>
              </div>
           </div>

           {/* Fake Reviews List */}
           <div className="space-y-6">
              {REVIEWS.map((review) => (
                 <div key={review.id} className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                       <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm
                            ${review.id % 4 === 0 ? 'bg-orange-500' : review.id % 3 === 0 ? 'bg-blue-500' : review.id % 2 === 0 ? 'bg-purple-500' : 'bg-teal-500'}
                          `}>
                             {review.avatarInitial}
                          </div>
                          <span className="font-medium text-sm text-gray-800">{review.name}</span>
                       </div>
                       <MoreVertical className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                       <div className="flex gap-[1px]">
                          {Array.from({ length: 5 }).map((_, i) => (
                             <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-[#01875F] text-[#01875F]' : 'fill-gray-300 text-gray-300'}`} />
                          ))}
                       </div>
                       <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                       {review.text}
                    </p>
                    <div className="flex items-center gap-3">
                       <span className="text-xs font-medium text-gray-500">Was this review helpful?</span>
                       <button className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">Yes</button>
                       <button className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors">No</button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}
