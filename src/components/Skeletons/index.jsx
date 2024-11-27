import { Container, Skeleton } from '@mui/material'
import React from 'react'

export const Skeletons = () => {
    return (
        <Container maxWidth="xl">
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
            <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1rem" }} />
        </Container>
    )
}