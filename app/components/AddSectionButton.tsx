'use client'

import useCvStore from "@/lib/store/cvStore";
import { WORK_EXPERIENCE_MOCK } from "@/lib/data/section_mock_data";

export default function AddSectionButton() {

    const state = useCvStore.getState();

    return <button onClick={() => state.addSection(WORK_EXPERIENCE_MOCK)}>
        Add 
    </button>
}
