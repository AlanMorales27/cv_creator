import { create } from 'zustand'
import { CvShape, PersonalItem, SectionItem } from '@/lib/schemas'
import { CvData } from '../cv_mock_data'
import { persist } from 'zustand/middleware'

type CvStoreActions = {
    addSection:         (section: SectionItem) => void,
    updatePersonalInfo: (info: PersonalItem) => void,
    updateSummary:      (summary: string) => void,
}

type CvStoreState = CvShape & CvStoreActions

const useCvStore = create<CvStoreState>()(
    persist(set => ({
        personalInfo: CvData.personalInfo,
        summary:      CvData.summary,
        sections:     CvData.sections,

        addSection: (section: SectionItem) => set(state => ({
            sections: [...state.sections, section]
        })),
        updatePersonalInfo: (info: PersonalItem) => set({ personalInfo: info }),
        updateSummary:      (summary: string) => set({ summary }),
    }),
        { name: 'cv' }
    )
)

export default useCvStore
