import { Request, Response } from 'express';
import { Candidate } from '../types/candidate';
import { prisma } from '../index';
import { Prisma } from '@prisma/client';

export const createCandidate = async (req: Request, res: Response) => {
  try {
    // Handle file upload
    const { firstName, lastName, email, phone, address, education, experience } = req.body;
    const cvPath = req.file ? req.file.path : undefined;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        error: 'First name, last name, and email are required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Create candidate in database
    const candidate: Candidate = await prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        education,
        experience,
        cvPath
      }
    });

    res.status(201).json({
      message: 'Candidate created successfully',
      candidate
    });
  } catch (error: any) {
    console.error('Error creating candidate:', error);
    
    // Handle unique constraint violation
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return res.status(409).json({
        error: 'A candidate with this email already exists',
        details: 'Email must be unique'
      });
    }
    
    res.status(500).json({
      error: 'An error occurred while creating the candidate',
      details: error.message
    });
  }
};

export const getCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await prisma.candidate.findMany();
    res.status(200).json(candidates);
  } catch (error: any) {
    console.error('Error fetching candidates:', error);
    res.status(500).json({
      error: 'An error occurred while fetching candidates',
      details: error.message
    });
  }
};

export const getCandidateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const candidate = await prisma.candidate.findUnique({
      where: { id: parseInt(id) }
    });

    if (!candidate) {
      return res.status(404).json({
        error: 'Candidate not found'
      });
    }

    res.status(200).json(candidate);
  } catch (error: any) {
    console.error('Error fetching candidate:', error);
    res.status(500).json({
      error: 'An error occurred while fetching the candidate',
      details: error.message
    });
  }
};
