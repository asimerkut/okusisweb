package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuSehirService;
import com.eryaz.okusis.domain.OkuSehir;
import com.eryaz.okusis.repository.OkuSehirRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing OkuSehir.
 */
@Service
@Transactional
public class OkuSehirServiceImpl implements OkuSehirService{

    private final Logger log = LoggerFactory.getLogger(OkuSehirServiceImpl.class);

    private final OkuSehirRepository okuSehirRepository;
    public OkuSehirServiceImpl(OkuSehirRepository okuSehirRepository) {
        this.okuSehirRepository = okuSehirRepository;
    }

    /**
     * Save a okuSehir.
     *
     * @param okuSehir the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuSehir save(OkuSehir okuSehir) {
        log.debug("Request to save OkuSehir : {}", okuSehir);
        return okuSehirRepository.save(okuSehir);
    }

    /**
     *  Get all the okuSehirs.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<OkuSehir> findAll() {
        log.debug("Request to get all OkuSehirs");
        return okuSehirRepository.findAll();
    }

    /**
     *  Get one okuSehir by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuSehir findOne(Long id) {
        log.debug("Request to get OkuSehir : {}", id);
        return okuSehirRepository.findOne(id);
    }

    /**
     *  Delete the  okuSehir by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuSehir : {}", id);
        okuSehirRepository.delete(id);
    }
}
