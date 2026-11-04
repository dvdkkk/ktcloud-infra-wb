import React, { useRef, useState, useEffect } from 'react';
import { UserCheck, Briefcase, Award, GraduationCap, Building2, School, Star, Users, CheckCircle } from 'lucide-react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const InstructorSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const instructorImgUrl = "https://postfiles.pstatic.net/MjAyNjExMDRfMjY5/MDAxNzkzNzc5Mjc2OTQ3.MuwfYeZHqUVquWbTvZbKnDiYzBZ-mBkpj6Dqpqg7bzog.hZ-Jv7Zq0kX_3f2zNsrOP4BTzWOwr2_7rikik4uuStsg.PNG/kbt_teacher1.png?type=w966";

  const satisfactionScores = [
    { label: '전반적 만족도', score: '4.9' },
    { label: '훈련내용', score: '4.9' },
    { label: '훈련교사', score: '5' },
    { label: '훈련방법', score: '4.8' },
    { label: '시설장비', score: '4.6' },
    { label: '행정서비스', score: '4.9' },
    { label: '취업지원', score: '4.7' },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-600 mb-4">
              <GraduationCap size={14} />
              <span className="text-xs font-bold tracking-wide uppercase">Instructor</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              탄탄한 기술과<br />
              <span className="text-red-600">경험을 지닌 전문 강사</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* 강사 프로필 헤더 */}
          <div className="text-center mb-10">
            {!imgError ? (
              <img 
                src={instructorImgUrl} 
                alt="김범택 강사" 
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-2 border-red-600/50 shadow-xl" 
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-36 h-36 rounded-full mx-auto mb-4 bg-zinc-800 border-2 border-red-600/50 shadow-xl flex items-center justify-center">
                <UserCheck size={54} className="text-red-500" />
              </div>
            )}
            <h3 className="text-2xl font-black text-white flex items-center justify-center gap-2">
              김범택 <span className="text-red-500 text-lg font-bold">| 강사</span>
            </h3>
            <p className="text-zinc-300 font-medium text-sm mt-1">클라우드 구축 및 컨설팅 전문가</p>
          </div>
          
          {/* 기술 태그 */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {['클라우드 엔지니어링', '보안', '가상화', '인공지능'].map(skill => (
              <span key={skill} className="bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 px-4 py-1.5 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* 고용24 공식 수강평가 박스 */}
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-12 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-zinc-800/80">
              {/* 고용24 로고 */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white text-zinc-900 shadow-sm">
                <div className="flex items-center font-black text-base tracking-tight">
                  <span className="text-[#0B4FA6]">고용</span>
                  <span className="text-[#FF5C00]">24</span>
                </div>
                <span className="text-xs font-bold text-zinc-600 border-l border-zinc-300 pl-2.5">
                  직업훈련 공식 수강평가
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-full">
                <CheckCircle size={14} />
                <span>공식 검증 완료 데이터</span>
              </div>
            </div>

            {/* 통계 요약 텍스트 */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-500 shrink-0">
                  <Star size={20} className="fill-red-500 text-red-500" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">평균 만족도</div>
                  <div className="text-sm md:text-base font-bold text-white">
                    총 수강 인원 <span className="text-red-400 font-extrabold">26명</span> · 평균 <span className="text-yellow-400 font-black text-lg">4.9점</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/70 border border-zinc-800/80 rounded-xl p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">평가 참여율</div>
                  <div className="text-sm md:text-base font-bold text-white">
                    총 평가인원 <span className="text-blue-400 font-extrabold">23명</span> · 참여율 <span className="text-emerald-400 font-black text-lg">88.5%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 수강평가 상세 표 */}
            <div className="overflow-x-auto relative rounded-xl border border-zinc-800">
              <div className="md:hidden text-center text-zinc-500 text-xs py-1.5 bg-zinc-900/90 border-b border-zinc-800">
                ← 좌우로 스크롤하여 확인하세요 →
              </div>
              <table className="w-full text-center text-zinc-300 text-sm border-collapse min-w-[620px]">
                <thead>
                  <tr className="bg-zinc-900/90 text-zinc-400 text-xs font-semibold border-b border-zinc-800">
                    {satisfactionScores.map((item) => (
                      <th key={item.label} className="py-3 px-2">
                        {item.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-zinc-950/60">
                    {satisfactionScores.map((item) => (
                      <td key={item.label} className="py-3.5 px-2 border-r last:border-r-0 border-zinc-900">
                        <span className={`font-black text-base ${
                          item.score === '5' ? 'text-red-500' : 'text-yellow-400'
                        }`}>
                          {item.score}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 경력 및 강의 이력 그리드 */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-800 pt-10">
            {/* 주요경력 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Briefcase size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">주요경력</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-red-500 font-bold text-xs uppercase tracking-wider mb-1.5">현재</p>
                  <ul className="text-zinc-300 text-sm space-y-1">
                    <li>· (現) kt Cloud 클라우드 인프라 전임강의</li>
                    <li>· (現) 클라우드분야 컨설팅 및 구축강의 프리랜서</li>
                  </ul>
                </div>
                <div>
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-wider mb-1.5">이전</p>
                  <ul className="text-zinc-400 text-sm space-y-1.5">
                    <li>· (前) kt Cloud 클라우드 인프라 전임강의 (1회차,4회차)</li>
                    <li>· (前) 하니웰 코리아 네트워크 보안 구축 및 운영</li>
                    <li>· (前) 시스코코리아 무선라우터 개발 및 최적화</li>
                    <li>· (前) 글로벌널리지 네트워크㈜ 네트워크, 서버, 가상화</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 기업 강의 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Building2 size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">기업 강의</h4>
              </div>
              <ul className="text-zinc-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[KaKao] Kakao 클라우드 엔지니어링 과정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[신세계아이엔씨] 클라우드 강의</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[CJ올리브네트웍스] 클라우드 강의</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>aws, 컨테이너, 쿠버네티스 강의</span>
                </li>
              </ul>
            </div>

            {/* 대학 강의 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <School size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">대학 강의</h4>
              </div>
              <div className="space-y-2 text-zinc-300 text-sm">
                <p className="leading-relaxed">
                  · 강원대, 계명대, 전남대, 경기대, 아주대, 성균관대 등
                </p>
                <p className="text-zinc-400 text-xs">
                  · 클라우드 강의
                </p>
              </div>
            </div>

            {/* 강의 경력 */}
            <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Award size={20} className="text-red-500" />
                <h4 className="text-lg font-bold">강의 경력</h4>
              </div>
              <ul className="text-zinc-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[IITP 혁신성장 인재 양성사업] 클라우드 강의</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>[한국폴리텍대학] 하이테크 프로젝트 진행</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>K-Software Empowerment BootCamp(KSEB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>AWS 클라우드엔지니어링</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span>SK텔레콤, 신한 등 기업 재직자 강의</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">·</span>
                  <span className="text-zinc-400">이외 다수 클라우드, 보안 관련 강의</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-zinc-500 text-xs mt-8 text-center">※ 운영상의 이유로 강사가 변경될 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};
