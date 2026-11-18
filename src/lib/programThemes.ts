import React from 'react';
import {
  Zap, Crown, Landmark, Trophy, GraduationCap, Mail
} from 'lucide-react';

export interface ProgramTableTheme {
  primaryHeaderBg: string;
  primaryHeaderText: string;
  tableBorder: string;
  headingColor: string;
  subtotalBg: string;
  subtotalText: string;
  grandTotalBg: string;
  grandTotalText: string;
  sponsorshipText: string;
  payableRowBg: string;
  payableRowText: string;
  payableHighlight: string;
  payableBorder: string;
  pdfPrimaryHeader: [number, number, number];
  pdfAccentDivider: [number, number, number];
  pdfPayableText: [number, number, number];
}

export interface ProgramThemeConfig {
  id: string;
  brandName: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  colorName: string;
  bannerGradient: string;
  builderBg: string;
  builderBorder: string;
  chipContainerBg: string;
  chipContainerBorder: string;
  inputBorder: string;
  inputFocus: string;
  previewBorder: string;
  previewHeaderBg: string;
  previewBadgeBg: string;
  previewBadgeText: string;
  previewBadgeBorder: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentBar: string;
  activePillBg: string;
  activePillText: string;
  activePillBorder: string;
  iconColor: string;
  iconBg: string;
  table: ProgramTableTheme;
}

export const getProgramTheme = (templateId: string = '', templateName: string = '', companyName: string = ''): ProgramThemeConfig => {
  const combined = `${templateId} ${templateName} ${companyName}`.toLowerCase();

  // 1. PMI Services (Purple shield with green star / purple "PMI" & emerald "SERVICES")
  if (combined.includes('pmi')) {
    return {
      id: 'pmi',
      brandName: 'PMI Services',
      subtitle: 'PMI Global Accreditation Proposal Framework',
      icon: Zap,
      colorName: 'Purple & Emerald',
      bannerGradient: 'bg-gradient-to-r from-purple-800 via-violet-700 to-emerald-700',
      builderBg: 'bg-gradient-to-b from-purple-100/90 via-purple-50/70 to-white',
      builderBorder: 'border-2 border-purple-400',
      chipContainerBg: 'bg-purple-100/60',
      chipContainerBorder: 'border-purple-300',
      inputBorder: 'border-purple-300',
      inputFocus: 'focus:border-purple-600 focus:ring-2 focus:ring-purple-400/30',
      previewBorder: 'border-2 border-purple-400',
      previewHeaderBg: 'bg-gradient-to-r from-purple-800 to-emerald-700 text-white',
      previewBadgeBg: 'bg-white',
      previewBadgeText: 'text-purple-900',
      previewBadgeBorder: 'border-purple-200',
      badgeBg: 'bg-purple-700',
      badgeText: 'text-white',
      badgeBorder: 'border-purple-800',
      accentBar: 'bg-purple-700',
      activePillBg: 'bg-purple-700 text-white border-purple-800 shadow-xs',
      activePillText: 'text-purple-700',
      activePillBorder: 'border-purple-400',
      iconColor: 'text-purple-700',
      iconBg: 'bg-purple-100',
      table: {
        primaryHeaderBg: '#581c87', // Deep Royal Purple
        primaryHeaderText: '#ffffff',
        tableBorder: '#000000',
        headingColor: '#6b21a8',
        subtotalBg: '#faf5ff',
        subtotalText: '#000000',
        grandTotalBg: '#059669', // Emerald Green Accent
        grandTotalText: '#ffffff',
        sponsorshipText: '#059669',
        payableRowBg: '#581c87',
        payableRowText: '#ffffff',
        payableHighlight: '#059669',
        payableBorder: '#6b21a8',
        pdfPrimaryHeader: [88, 28, 135],
        pdfAccentDivider: [5, 150, 105],
        pdfPayableText: [5, 150, 105]
      }
    };
  }

  // 2. Elite Toolistic (Vibrant Cyan-to-Blue Pill Gradient with Dark Blue / Indigo text)
  if (combined.includes('elite')) {
    return {
      id: 'elite',
      brandName: 'Elite Toolistic',
      subtitle: 'Elite Toolistic Executive Proposal Framework',
      icon: Crown,
      colorName: 'Royal Blue & Cyan',
      bannerGradient: 'bg-gradient-to-r from-blue-900 via-indigo-700 to-cyan-600',
      builderBg: 'bg-gradient-to-b from-blue-100/90 via-sky-50/70 to-white',
      builderBorder: 'border-2 border-blue-400',
      chipContainerBg: 'bg-blue-100/60',
      chipContainerBorder: 'border-blue-300',
      inputBorder: 'border-blue-300',
      inputFocus: 'focus:border-blue-600 focus:ring-2 focus:ring-blue-400/30',
      previewBorder: 'border-2 border-blue-400',
      previewHeaderBg: 'bg-gradient-to-r from-blue-800 to-indigo-800 text-white',
      previewBadgeBg: 'bg-white',
      previewBadgeText: 'text-blue-900',
      previewBadgeBorder: 'border-blue-200',
      badgeBg: 'bg-blue-600',
      badgeText: 'text-white',
      badgeBorder: 'border-blue-700',
      accentBar: 'bg-blue-600',
      activePillBg: 'bg-blue-600 text-white border-blue-700 shadow-xs',
      activePillText: 'text-blue-700',
      activePillBorder: 'border-blue-400',
      iconColor: 'text-blue-700',
      iconBg: 'bg-blue-100',
      table: {
        primaryHeaderBg: '#1e3a8a', // Deep Royal Tech Navy Blue
        primaryHeaderText: '#ffffff',
        tableBorder: '#000000',
        headingColor: '#1e3a8a',
        subtotalBg: '#f0f9ff', // Light Ice Cyan
        subtotalText: '#000000',
        grandTotalBg: '#2563eb', // Electric Royal Blue
        grandTotalText: '#ffffff',
        sponsorshipText: '#0284c7', // Cyan / Sky Blue
        payableRowBg: '#1e1b4b', // Deep Midnight Indigo
        payableRowText: '#ffffff',
        payableHighlight: '#2563eb',
        payableBorder: '#2563eb',
        pdfPrimaryHeader: [30, 58, 138],
        pdfAccentDivider: [37, 99, 235],
        pdfPayableText: [37, 99, 235]
      }
    };
  }

  // 3. Harvard Learning Professional Services (Harvard Crimson crest with Antique Gold / Bronze details)
  if (combined.includes('harvard')) {
    return {
      id: 'harvard',
      brandName: 'Harvard Training',
      subtitle: 'Harvard Executive Blueprint Proposal Framework',
      icon: Landmark,
      colorName: 'Crimson & Gold',
      bannerGradient: 'bg-gradient-to-r from-red-950 via-rose-900 to-amber-700',
      builderBg: 'bg-gradient-to-b from-rose-100/90 via-amber-50/50 to-white',
      builderBorder: 'border-2 border-rose-400',
      chipContainerBg: 'bg-rose-100/60',
      chipContainerBorder: 'border-rose-300',
      inputBorder: 'border-rose-300',
      inputFocus: 'focus:border-rose-700 focus:ring-2 focus:ring-rose-400/30',
      previewBorder: 'border-2 border-rose-400',
      previewHeaderBg: 'bg-gradient-to-r from-rose-950 to-amber-700 text-white',
      previewBadgeBg: 'bg-white',
      previewBadgeText: 'text-rose-950',
      previewBadgeBorder: 'border-rose-200',
      badgeBg: 'bg-rose-900',
      badgeText: 'text-white',
      badgeBorder: 'border-rose-950',
      accentBar: 'bg-rose-900',
      activePillBg: 'bg-rose-900 text-white border-amber-600 shadow-xs',
      activePillText: 'text-rose-900',
      activePillBorder: 'border-rose-400',
      iconColor: 'text-rose-900',
      iconBg: 'bg-rose-100',
      table: {
        primaryHeaderBg: '#7f1d1d', // Authentic Harvard Crimson
        primaryHeaderText: '#ffffff',
        tableBorder: '#000000',
        headingColor: '#7f1d1d',
        subtotalBg: '#fffbeb', // Warm Gold Tint / Ivory
        subtotalText: '#000000',
        grandTotalBg: '#b45309', // Antique Gold / Bronze
        grandTotalText: '#ffffff',
        sponsorshipText: '#b45309',
        payableRowBg: '#7f1d1d',
        payableRowText: '#ffffff',
        payableHighlight: '#b45309',
        payableBorder: '#7f1d1d',
        pdfPrimaryHeader: [127, 29, 29],
        pdfAccentDivider: [180, 83, 9],
        pdfPayableText: [180, 83, 9]
      }
    };
  }

  // 4. Princeton Professional (Princeton Midnight Navy shield + Princeton Warm Orange)
  if (combined.includes('princeton')) {
    return {
      id: 'princeton',
      brandName: 'Princeton Professional',
      subtitle: 'Princeton Strategic Certification Proposal Framework',
      icon: Trophy,
      colorName: 'Navy & Orange',
      bannerGradient: 'bg-gradient-to-r from-slate-950 via-blue-950 to-orange-600',
      builderBg: 'bg-gradient-to-b from-orange-100/70 via-slate-50/70 to-white',
      builderBorder: 'border-2 border-orange-400',
      chipContainerBg: 'bg-orange-100/60',
      chipContainerBorder: 'border-orange-300',
      inputBorder: 'border-orange-300',
      inputFocus: 'focus:border-orange-600 focus:ring-2 focus:ring-orange-400/30',
      previewBorder: 'border-2 border-orange-400',
      previewHeaderBg: 'bg-gradient-to-r from-blue-950 to-orange-600 text-white',
      previewBadgeBg: 'bg-white',
      previewBadgeText: 'text-orange-950',
      previewBadgeBorder: 'border-orange-200',
      badgeBg: 'bg-blue-950',
      badgeText: 'text-orange-400',
      badgeBorder: 'border-orange-600',
      accentBar: 'bg-orange-600',
      activePillBg: 'bg-blue-950 text-white border-orange-500 shadow-xs',
      activePillText: 'text-orange-600',
      activePillBorder: 'border-orange-400',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      table: {
        primaryHeaderBg: '#0f2942', // Princeton Midnight Navy
        primaryHeaderText: '#ffffff',
        tableBorder: '#000000',
        headingColor: '#0f2942',
        subtotalBg: '#fff7ed', // Princeton Orange Soft Cream
        subtotalText: '#000000',
        grandTotalBg: '#ea580c', // Princeton Orange
        grandTotalText: '#ffffff',
        sponsorshipText: '#ea580c',
        payableRowBg: '#0f2942',
        payableRowText: '#ffffff',
        payableHighlight: '#ea580c',
        payableBorder: '#0f2942',
        pdfPrimaryHeader: [15, 41, 66],
        pdfAccentDivider: [234, 88, 12],
        pdfPayableText: [234, 88, 12]
      }
    };
  }

  // 5. I-SUCCESSNODE (High-Contrast Monochrome Onyx / Pure Jet Black with Lightning Bolt)
  if (combined.includes('isuccessnode') || combined.includes('i-successnode') || combined.includes('isuccess') || combined.includes('program proposal')) {
    return {
      id: 'isuccessnode',
      brandName: 'I-SUCCESSNODE',
      subtitle: 'Official I-SUCCESSNODE Training Program Proposal',
      icon: GraduationCap,
      colorName: 'Monochrome Onyx',
      bannerGradient: 'bg-gradient-to-r from-slate-950 via-gray-900 to-zinc-900',
      builderBg: 'bg-gradient-to-b from-slate-100/90 via-gray-50/70 to-white',
      builderBorder: 'border-2 border-slate-400',
      chipContainerBg: 'bg-slate-100/70',
      chipContainerBorder: 'border-slate-300',
      inputBorder: 'border-slate-300',
      inputFocus: 'focus:border-slate-800 focus:ring-2 focus:ring-slate-400/30',
      previewBorder: 'border-2 border-slate-400',
      previewHeaderBg: 'bg-gradient-to-r from-slate-950 to-gray-900 text-white',
      previewBadgeBg: 'bg-white',
      previewBadgeText: 'text-slate-950',
      previewBadgeBorder: 'border-slate-200',
      badgeBg: 'bg-slate-900',
      badgeText: 'text-white',
      badgeBorder: 'border-black',
      accentBar: 'bg-slate-900',
      activePillBg: 'bg-slate-900 text-white border-black shadow-xs',
      activePillText: 'text-slate-900',
      activePillBorder: 'border-slate-400',
      iconColor: 'text-slate-900',
      iconBg: 'bg-slate-200',
      table: {
        primaryHeaderBg: '#111827', // Crisp Jet Black
        primaryHeaderText: '#ffffff',
        tableBorder: '#000000',
        headingColor: '#111827',
        subtotalBg: '#f8fafc',
        subtotalText: '#000000',
        grandTotalBg: '#1f2937', // Carbon Graphite
        grandTotalText: '#ffffff',
        sponsorshipText: '#374151',
        payableRowBg: '#000000',
        payableRowText: '#ffffff',
        payableHighlight: '#000000',
        payableBorder: '#000000',
        pdfPrimaryHeader: [17, 24, 39],
        pdfAccentDivider: [31, 41, 55],
        pdfPayableText: [17, 24, 39]
      }
    };
  }

  // Generic custom template (Sky / Navy Modern)
  return {
    id: 'custom',
    brandName: templateName || 'Custom Program',
    subtitle: 'Custom Email Template Blueprint',
    icon: Mail,
    colorName: 'Slate & Indigo',
    bannerGradient: 'bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900',
    builderBg: 'bg-gradient-to-b from-indigo-50/80 via-slate-50/70 to-white',
    builderBorder: 'border-2 border-indigo-300',
    chipContainerBg: 'bg-indigo-50',
    chipContainerBorder: 'border-indigo-200',
    inputBorder: 'border-slate-300',
    inputFocus: 'focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400/30',
    previewBorder: 'border-2 border-indigo-300',
    previewHeaderBg: 'bg-gradient-to-r from-slate-900 to-indigo-900 text-white',
    previewBadgeBg: 'bg-white',
    previewBadgeText: 'text-indigo-950',
    previewBadgeBorder: 'border-indigo-200',
    badgeBg: 'bg-indigo-700',
    badgeText: 'text-white',
    badgeBorder: 'border-indigo-800',
    accentBar: 'bg-indigo-600',
    activePillBg: 'bg-indigo-600 text-white border-indigo-700 shadow-xs',
    activePillText: 'text-indigo-700',
    activePillBorder: 'border-indigo-400',
    iconColor: 'text-indigo-700',
    iconBg: 'bg-indigo-100',
    table: {
      primaryHeaderBg: '#0f172a',
      primaryHeaderText: '#ffffff',
      tableBorder: '#000000',
      headingColor: '#0f172a',
      subtotalBg: '#f8fafc',
      subtotalText: '#000000',
      grandTotalBg: '#4f46e5',
      grandTotalText: '#ffffff',
      sponsorshipText: '#059669',
      payableRowBg: '#0f172a',
      payableRowText: '#ffffff',
      payableHighlight: '#4f46e5',
      payableBorder: '#4f46e5',
      pdfPrimaryHeader: [15, 23, 42],
      pdfAccentDivider: [79, 70, 229],
      pdfPayableText: [79, 70, 229]
    }
  };
};
