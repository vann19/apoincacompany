"use client"

import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

type SearchProps = {
  value: string
  onChange: (value: string) => void
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <InputGroup className="max-w-md bg-card">
      <InputGroupAddon align="inline-start">
        <SearchIcon className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupInput
        type="search"
        aria-label="Cari artikel"
        placeholder="Cari artikel..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  )
}
