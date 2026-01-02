"use client"
import { FreshFlowContextType } from '@/types/context';
import { createContext } from 'react';

const FreshFlowContext = createContext<FreshFlowContextType | null>(null)

export default FreshFlowContext;