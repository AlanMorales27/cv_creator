import { create } from 'zustand'
import { CvShape, PersonalItem, SectionItem } from '@/lib/schemas'
import { CvData } from '../data/cv_mock_data'
import { persist } from 'zustand/middleware'

type CvStoreActions = {
    updatePersonalInfo: (info: PersonalItem) => void,
    updateSummary: (summary: string) => void,
    updateSection: (id: number, data: SectionItem) => void,
    addSection: (section: SectionItem) => void,
    deleteSection: (id: number) => void,
}

type CvStoreState = CvShape & CvStoreActions

const useCvStore = create<CvStoreState>()(
    persist(set => ({
        personalInfo: CvData.personalInfo,
        summary: CvData.summary,
        sections: CvData.sections,

        updatePersonalInfo: (info: PersonalItem) => set({ personalInfo: info }),
        
        updateSummary: (summary: string) => set({ summary }),

        updateSection: (id: number, data: SectionItem) => set(state => ({
            sections: state.sections.map(s => s.id === id ? data : s)
        })),

        addSection: (section: SectionItem) => set(state => ({
            sections: [...state.sections, section]
        })),

        deleteSection: (id: number) => set(state => ({
            sections: state.sections.filter(s => s.id !== id)
        })),

    }),
        { name: 'cv' }
    )
)

export default useCvStore
