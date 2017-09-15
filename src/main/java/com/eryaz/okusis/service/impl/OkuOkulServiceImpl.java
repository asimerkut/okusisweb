package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuOkulService;
import com.eryaz.okusis.domain.OkuOkul;
import com.eryaz.okusis.repository.OkuOkulRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing OkuOkul.
 */
@Service
@Transactional
public class OkuOkulServiceImpl implements OkuOkulService{

    private final Logger log = LoggerFactory.getLogger(OkuOkulServiceImpl.class);

    private final OkuOkulRepository okuOkulRepository;
    public OkuOkulServiceImpl(OkuOkulRepository okuOkulRepository) {
        this.okuOkulRepository = okuOkulRepository;
    }

    /**
     * Save a okuOkul.
     *
     * @param okuOkul the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuOkul save(OkuOkul okuOkul) {
        log.debug("Request to save OkuOkul : {}", okuOkul);
        return okuOkulRepository.save(okuOkul);
    }

    /**
     *  Get all the okuOkuls.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<OkuOkul> findAll(Pageable pageable) {
        log.debug("Request to get all OkuOkuls");
        return okuOkulRepository.findAll(pageable);
    }

    /**
     *  Get one okuOkul by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuOkul findOne(Long id) {
        log.debug("Request to get OkuOkul : {}", id);
        return okuOkulRepository.findOne(id);
    }

    /**
     *  Delete the  okuOkul by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuOkul : {}", id);
        okuOkulRepository.delete(id);
    }
}
