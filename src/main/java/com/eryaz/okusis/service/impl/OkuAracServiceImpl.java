package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuAracService;
import com.eryaz.okusis.domain.OkuArac;
import com.eryaz.okusis.repository.OkuAracRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing OkuArac.
 */
@Service
@Transactional
public class OkuAracServiceImpl implements OkuAracService{

    private final Logger log = LoggerFactory.getLogger(OkuAracServiceImpl.class);

    private final OkuAracRepository okuAracRepository;
    public OkuAracServiceImpl(OkuAracRepository okuAracRepository) {
        this.okuAracRepository = okuAracRepository;
    }

    /**
     * Save a okuArac.
     *
     * @param okuArac the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuArac save(OkuArac okuArac) {
        log.debug("Request to save OkuArac : {}", okuArac);
        return okuAracRepository.save(okuArac);
    }

    /**
     *  Get all the okuAracs.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<OkuArac> findAll(Pageable pageable) {
        log.debug("Request to get all OkuAracs");
        return okuAracRepository.findAll(pageable);
    }

    /**
     *  Get one okuArac by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuArac findOne(Long id) {
        log.debug("Request to get OkuArac : {}", id);
        return okuAracRepository.findOne(id);
    }

    /**
     *  Delete the  okuArac by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuArac : {}", id);
        okuAracRepository.delete(id);
    }
}
