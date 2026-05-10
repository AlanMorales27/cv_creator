import { create } from 'zustand'
import { CvShape } from '@/lib/schemas'
import { CvData } from '../cv_mock_data'
import { persist } from 'zustand/middleware'

type CvStoreActions = {}

type CvStoreState = CvShape & CvStoreActions

const useCvStore = create<CvStoreState>()(
    persist(set => ({
        personalInfo: CvData.personalInfo,
        summary:      CvData.summary,
        sections:     CvData.sections,
        actions: {},
    }),
        { name: 'cv' }
    )
)

export default useCvStore