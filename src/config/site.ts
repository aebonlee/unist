/**
 * UNIST 데이터 분석 실습 & 시각화 교육 사이트 설정
 * (data.dreamitbiz.com 기반 — 제공 자료(PPT·엑셀문제)에 맞춰 내용 갱신 예정)
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'unist',

  name: 'UNIST',
  nameKo: '생성형 AI 활용 데이터 분석',
  description: '울산 중소기업 현장연계 전문인력 양성과정 — Colab·Gemini 생성형 AI로 화학 공정·고객·비즈니스 데이터를 분석하는 6시간 실습 과정',
  url: 'https://unist.dreamitbiz.com',

  dbPrefix: 'unist_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'UN', className: 'brand-dream' },
      { text: 'IST', className: 'brand-it' }
    ]
  },

  themeColor: '#1B2A4A',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: false,
    community: false,
    search: false,
    auth: true,
    license: false,
  },

  // 기본 다크 블루(navy) + 5가지 컬러 테마
  colors: [
    { name: 'blue', color: '#1B2A4A' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#5B2C8B' },
    { name: 'orange', color: '#D4760A' },
  ],

  menuItems: [
    {
      labelKey: 'About',
      path: '/about',
      activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: '과정 소개' },
        { path: '/about/instructor', labelKey: '강사 소개' },
        { path: '/about/company', labelKey: '운영 기관' },
      ]
    },
    {
      labelKey: '커리큘럼',
      path: '/curriculum',
      activePath: '/curriculum',
    },
    {
      labelKey: '강의안',
      path: '/lecture',
      activePath: '/lecture',
      dropdown: [
        { path: '/lecture/module1', labelKey: '화학·제조 산업 AX와 데이터 리터러시' },
        { path: '/lecture/module2', labelKey: '클라우드 AI 분석환경 (Colab·PTCF)' },
        { path: '/lecture/module3', labelKey: '데이터 정제 및 통계 분석' },
        { path: '/lecture/module4', labelKey: '고객 반응 데이터 분석' },
        { path: '/lecture/module5', labelKey: 'KAMP 화학공정 품질분석' },
        { path: '/lecture/module6', labelKey: 'AI 시각화·지식화 프로젝트' },
      ]
    },
    { labelKey: 'AI 학습자료', path: '/learn', activePath: '/learn' },
    {
      labelKey: 'AI 도구',
      path: '/tools',
      activePath: '/tools',
      dropdown: [
        { path: '/tools', labelKey: 'AI 도구 모아보기' },
        { path: '/tools/chatgpt', labelKey: 'ChatGPT' },
        { path: '/tools/claude', labelKey: 'Claude' },
        { path: '/tools/gemini', labelKey: 'Gemini' },
        { path: '/tools/genspark', labelKey: 'Genspark' },
      ]
    },
    {
      labelKey: '활용 사례',
      path: '/examples',
      activePath: '/examples',
      dropdown: [
        { path: '/examples', labelKey: '전체 사례' },
        { path: '/examples/beginner', labelKey: '입문' },
        { path: '/examples/basic', labelKey: '기초' },
        { path: '/examples/advanced', labelKey: '활용' },
      ]
    },
    {
      labelKey: '프롬프트',
      path: '/prompt/learn',
      activePath: '/prompt',
      dropdown: [
        { path: '/prompt/learn', labelKey: '프롬프트 학습' },
        { path: '/prompt/practice', labelKey: '프롬프트 실습' },
        { path: '/prompt/cases', labelKey: '프롬프트 사례' },
      ]
    },
    { labelKey: 'AI 실습실', path: '/playground', activePath: '/playground' },
    { labelKey: '추천 자료', path: '/recommended', activePath: '/recommended' },
  ],

  footerLinks: [
    { path: '/curriculum', labelKey: '커리큘럼' },
    { path: '/lecture', labelKey: '강의안' },
    { path: '/about', labelKey: '과정 소개' },
    { path: '/recommended', labelKey: '추천 자료' }
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'Claude Master (AI 학습)', url: 'https://claude.dreamitbiz.com' },
    { name: 'DevLab (개발 학습)', url: 'https://project.dreamitbiz.com' },
    { name: 'AI Reboot Academy', url: 'https://rest.dreamitbiz.com' }
  ]
};

export default site;
