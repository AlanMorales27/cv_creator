'use client'

import { PlusIcon } from "lucide-react";

import useCvStore from "@/lib/store/cvStore";
import {
    buildEducationMock,
    buildSkillsMock,
    buildWorkExperienceMock,
} from "@/lib/data/section_mock_data";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AddSectionButton() {
    const addSection = useCvStore(state => state.addSection);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={
                <Button variant="outline">
                    <PlusIcon />
                    Agregar sección
                </Button>
            } />
            <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => addSection(buildEducationMock())}>
                    Agregar Educación
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => addSection(buildWorkExperienceMock())}>
                    Agregar Experiencia
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => addSection(buildSkillsMock())}>
                    Agregar Habilidades
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
